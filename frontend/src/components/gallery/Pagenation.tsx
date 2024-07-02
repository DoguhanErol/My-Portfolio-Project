import  { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import globalVariables from '../../Config';
import { useGalleryContext } from '../../contexts/GalleryContext';
import * as React from 'react';

const PaginationWithPageCount: React.FC = () => {
    const { count } = useGalleryContext();
    const [pageCount, setPageCount] = useState<number>(Math.ceil(count / 9));
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [pageNumber, setPageNumber] = useState<number>(parseInt(queryParams.get('page') || '1', 10));

    useEffect(() => {
        setPageNumber(parseInt(queryParams.get('page') || '1', 10));
    }, [location.search]);

    const handleNextPage = () => {
        return pageNumber === pageCount ? 1 : pageNumber + 1;
    };

    const handlePrevPage = () => {
        return pageNumber === 1 ? pageCount : pageNumber - 1;
    };

    const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);

    return (
        <>
            <div className="flex justify-center space-x-1 text-gray-100">
                <Link to={`${globalVariables.websiteUrl}galeri?page=${handlePrevPage()}`} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </Link>
                <div className='flex flex-wrap'>
                    {pageNumbers.map((index) => (
                        <Link
                            to={`${globalVariables.websiteUrl}galeri?page=${index}`}
                            key={index}
                            type="button"
                            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md    bg-gray-900 border-gray-800 ${index === pageNumber ? 'bg-blue-400 text-white' : ''}`}
                            title={`Page ${index}`}
                        >
                            {index}
                        </Link>

                    ))}

                </div>
                
                <Link to={`${globalVariables.websiteUrl}galeri?page=${handleNextPage()}`} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </Link>
            </div>
        </>
    );
};

export default PaginationWithPageCount;
