import React, { useState, useEffect } from 'react';
import { Search, Calendar, Filter, X, ChevronLeft, ChevronRight, Download, ExternalLink, FileText } from 'lucide-react';

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const NoticeDetails = () => {
    const [notices, setNotices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total_records: 0,
        total_pages: 0
    });

    const getFullUrl = (path) => {
        if (!path) return '#';
        if (path.startsWith('http')) {
            return path;
        }
        return `https://ccet.ac.in/${path}`;
    };

    const fetchNotices = async (page = 1) => {
        setIsLoading(true);
        try {
            let url = `https://ccet.ac.in/api/notices.php?page=${page}&limit=10`;

            if (searchKeyword) {
                url += `&keyword=${encodeURIComponent(searchKeyword)}`;
            }
            if (filterType) {
                url += `&type=${encodeURIComponent(filterType)}`;
            }
            if (filterDate) {
                url += `&date=${filterDate}`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                setNotices(result.data || []);
                setPagination(result.pagination);
                setCurrentPage(page);
                setError(null);
            } else {
                setNotices([]);
                setPagination({
                    page: 1,
                    limit: 10,
                    total_records: 0,
                    total_pages: 0
                });
                setError(result.error || "No notices found");
            }

        } catch (err) {
            console.error("Error fetching notices:", err);
            setError("Failed to fetch notices. Please try again later.");
            setNotices([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNotices(1);
    }, []);

    const handleSearch = () => {
        fetchNotices(1);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const clearFilters = () => {
        setSearchKeyword('');
        setFilterType('');
        setFilterDate('');
        setCurrentPage(1);
        setTimeout(() => {
            fetchNotices(1);
        }, 100);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= pagination.total_pages) {
            fetchNotices(page);
        }
    };

    const hasActiveFilters = searchKeyword || filterType || filterDate;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-indigo-600 bg-clip-text text-transparent mb-2">
                        Notices
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">Stay updated with the latest announcements</p>
                </div>

                {/* Search and Filter Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 mb-4 sm:mb-6">
                    <div className="space-y-3 sm:space-y-4">
                        {/* Search Bar */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                                <input
                                    type="text"
                                    placeholder="Search notices..."
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="flex gap-2 sm:gap-3">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base ${
                                        showFilters
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    }`}
                                >
                                    <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="hidden sm:inline">Filters</span>
                                </button>
                                <button
                                    onClick={handleSearch}
                                    className="flex-1 sm:flex-none px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all font-medium text-sm sm:text-base shadow-lg shadow-blue-200"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Filters */}
                        {showFilters && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-gray-100">
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                                        Notice Type
                                    </label>
                                    <input
                                        type="text"
                                        value={filterType}
                                        onChange={(e) => setFilterType(e.target.value)}
                                        placeholder="e.g., Academic, Administrative"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                                        Specific Date
                                    </label>
                                    <input
                                        type="date"
                                        value={filterDate}
                                        onChange={(e) => setFilterDate(e.target.value)}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Active Filters */}
                        {hasActiveFilters && (
                            <div className="flex flex-wrap gap-2 items-center pt-2">
                                <span className="text-xs sm:text-sm font-medium text-gray-600">Active filters:</span>
                                {searchKeyword && (
                                    <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                                        Search: "{searchKeyword.length > 15 ? searchKeyword.substring(0, 15) + '...' : searchKeyword}"
                                    </span>
                                )}
                                {filterType && (
                                    <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                                        Type: {filterType}
                                    </span>
                                )}
                                {filterDate && (
                                    <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                                        Date: {formatDate(filterDate)}
                                    </span>
                                )}
                                <button
                                    onClick={clearFilters}
                                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-medium hover:bg-red-200 transition-colors flex items-center gap-1"
                                >
                                    <X className="w-3 h-3" />
                                    Clear All
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="text-center py-12 sm:py-16">
                        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
                        <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">Loading notices...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !isLoading && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-sm sm:text-base text-yellow-800 font-medium">
                        {error}
                    </div>
                )}

                {/* No Results */}
                {!isLoading && !error && notices.length === 0 && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center">
                        <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-3 sm:mb-4" />
                        <p className="text-gray-700 text-base sm:text-lg font-medium mb-3 sm:mb-4">No notices found matching your criteria</p>
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg sm:rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base shadow-lg shadow-blue-200"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                )}

                {/* Desktop Table View */}
                {!isLoading && notices.length > 0 && (
                    <>
                        <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            #
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Notice Title
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    {notices.map((notice, index) => (
                                        <tr
                                            key={notice.id}
                                            className="hover:bg-blue-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm font-bold text-gray-600">
                                                        {((currentPage - 1) * pagination.limit) + index + 1}
                                                    </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                                    <Calendar className="w-4 h-4 text-blue-600" />
                                                    <span className="font-medium">{formatDate(notice.date)}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-semibold text-gray-900 max-w-md">
                                                    {notice.title}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {notice.type ? (
                                                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                                            {notice.type}
                                                        </span>
                                                ) : (
                                                    <span className="text-gray-400 text-xs">—</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                {notice.link ? (
                                                    <a
                                                        href={getFullUrl(notice.link)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        View
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">No link</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile Card View */}
                        <div className="lg:hidden space-y-3 sm:space-y-4">
                            {notices.map((notice, index) => (
                                <div key={notice.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                                            #{((currentPage - 1) * pagination.limit) + index + 1}
                                        </span>
                                        {notice.type && (
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                                                {notice.type}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 leading-snug">
                                        {notice.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
                                        <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span className="font-medium">{formatDate(notice.date)}</span>
                                    </div>

                                    {notice.link ? (
                                        <a
                                            href={getFullUrl(notice.link)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all font-medium text-sm shadow-md"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Notice
                                        </a>
                                    ) : (
                                        <div className="text-center text-gray-400 text-sm py-2">No link available</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {pagination.total_pages > 1 && (
                            <div className="mt-6 sm:mt-8 flex flex-col gap-4 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
                                <div className="text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left">
                                    Showing <span className="font-bold text-blue-600">{((currentPage - 1) * pagination.limit) + 1}</span> to <span className="font-bold text-blue-600">{Math.min(currentPage * pagination.limit, pagination.total_records)}</span> of <span className="font-bold text-blue-600">{pagination.total_records}</span> notices
                                </div>

                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>

                                    <div className="flex gap-1 overflow-x-auto max-w-[200px] sm:max-w-none">
                                        {[...Array(pagination.total_pages)].map((_, idx) => {
                                            const pageNum = idx + 1;
                                            if (
                                                pageNum === 1 ||
                                                pageNum === pagination.total_pages ||
                                                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                                            ) {
                                                return (
                                                    <button
                                                        key={pageNum}
                                                        onClick={() => goToPage(pageNum)}
                                                        className={`min-w-[36px] sm:min-w-[40px] px-3 sm:px-4 py-2 rounded-lg transition-all font-medium text-sm sm:text-base ${
                                                            currentPage === pageNum
                                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200'
                                                                : 'border-2 border-gray-300 hover:bg-gray-50 text-gray-700'
                                                        }`}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                );
                                            } else if (
                                                pageNum === currentPage - 2 ||
                                                pageNum === currentPage + 2
                                            ) {
                                                return <span key={pageNum} className="px-1 sm:px-2 text-gray-400 font-bold text-sm sm:text-base">...</span>;
                                            }
                                            return null;
                                        })}
                                    </div>

                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === pagination.total_pages}
                                        className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default NoticeDetails;