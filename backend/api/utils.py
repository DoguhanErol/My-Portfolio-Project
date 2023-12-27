# utils.py

from django.core.mail import send_mail
from django.conf import settings


class MailHandler:
    @staticmethod
    def send_mail_to_client(electronic_mail):
        subject = electronic_mail.mail_first_name + ' ' + electronic_mail.mail_last_name + \
            ' tarafindan ' + electronic_mail.mail_address + ' eposta adresi ile gönderildi. '
        message = electronic_mail.mail_message
        recipient_email = electronic_mail.mail_address
        from_email = settings.EMAIL_HOST_USER

        if MailHandler.isValidMail(subject, message, from_email, recipient_email):
            send_mail(subject, message, from_email,
                      [recipient_email], fail_silently=False)

    @staticmethod
    def isValidMail(subject, message, from_email, recipient_email):
        if all([from_email, subject, message, recipient_email]) and "@" in recipient_email:
            return True
        else:
            return False
