import React, { useState, useEffect, useCallback } from "react";
import { Search, Calendar, MapPin, Filter, X, Clock, ArrowUp, ArrowDown } from "lucide-react";

const API_BASE_URL = 'https://ccet.ac.in/api/event-calender.php';

const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const isUpcoming = date >= today;
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return { day, month, year, isUpcoming, formattedDate };
};

const EventCard = React.memo(({ event }) => {
    const { day, month, formattedDate, year, isUpcoming } = formatEventDate(event.date);

    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden h-full flex flex-col">
                <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                            <div className={`text-center rounded-lg p-2 ${isUpcoming ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`} style={{ minWidth: '50px' }}>
                                <div className="font-bold text-lg leading-none">{day}</div>
                                <div className="text-xs uppercase leading-none">{month}</div>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-700">{formattedDate}</div>
                                <div className="text-xs text-gray-500">{year}</div>
                            </div>
                        </div>

                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isUpcoming ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {isUpcoming ? 'Upcoming' : 'Past'}
                        </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-900 mb-1 leading-tight">
                        {event.title}
                    </h3>

                    {event.location && (
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                            <MapPin size={14} className="mr-1 text-indigo-500" />
                            <span className="truncate">{event.location}</span>
                        </div>
                    )}

                    {event.description && (
                        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                            {event.description}
                        </p>
                    )}
                </div>

                {event.event_type && (
                    <div className="p-4 pt-0 border-t border-gray-100">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
                            <Filter size={10} className="mr-1" />
                            {event.event_type}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
});

const EventCalendarPage = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEventType, setSelectedEventType] = useState("");
    const [eventTypes, setEventTypes] = useState([]);
    const [filterView, setFilterView] = useState("all"); // all, upcoming, past
    const [showFilters, setShowFilters] = useState(false); // For mobile menu toggle

    const fetchEvents = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}?is_active=true`);
            const data = await response.json();

            if (Array.isArray(data)) {
                setEvents(data);
                const types = [...new Set(data.map(e => e.event_type).filter(Boolean))];
                setEventTypes(types);
            } else if (data && data.success === false) {
                setError(data.error || "Failed to load events");
            } else {
                setError("Received unexpected data format from the server.");
            }
        } catch (err) {
            setError("Error loading events. Check network connection.");
            console.error("Event fetch error:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const filterEvents = useCallback(() => {
        let filtered = [...events];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 1. Apply time filter
        if (filterView === "upcoming") {
            filtered = filtered.filter(event => new Date(event.date) >= today);
        } else if (filterView === "past") {
            filtered = filtered.filter(event => new Date(event.date) < today);
        }

        if (selectedEventType) {
            filtered = filtered.filter(event => event.event_type === selectedEventType);
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(event =>
                event.title?.toLowerCase().includes(term) ||
                event.description?.toLowerCase().includes(term) ||
                event.location?.toLowerCase().includes(term)
            );
        }

        setFilteredEvents(filtered);
    }, [events, searchTerm, selectedEventType, filterView]);

    useEffect(() => {
        filterEvents();
    }, [filterEvents]);

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedEventType("");
        setFilterView("all");
    };

    const hasActiveFilters = searchTerm || selectedEventType || filterView !== "all";

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-3"></div>
                    <p className="text-gray-600">Loading events...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">Event Calendar</h1>
                    <p className="text-gray-500">Discover upcoming and past events</p>
                </div>
            </div>

            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    {/* Filter Toggle for Mobile */}
                    <div className="lg:hidden flex justify-between items-center mb-3">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition"
                        >
                            <Filter size={16} className="mr-2" />
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-gray-500 hover:text-red-600 flex items-center"
                                title="Clear all filters"
                            >
                                <X size={16} className="mr-1" />
                                Clear
                            </button>
                        )}
                    </div>

                    <div className={`lg:flex lg:items-end lg:space-x-4 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
                        {/* Search Bar */}
                        <div className="flex-1 min-w-0 mb-3 lg:mb-0">
                            <label htmlFor="search" className="block text-sm font-semibold text-gray-700 sr-only">Search Events</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search size={18} className="text-gray-400" />
                                </div>
                                <input
                                    id="search"
                                    type="text"
                                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm placeholder-gray-500"
                                    placeholder="Search by title, description, or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
                            <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 sr-only">Event Type</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter size={18} className="text-gray-400" />
                                </div>
                                <select
                                    id="eventType"
                                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm appearance-none"
                                    value={selectedEventType}
                                    onChange={(e) => setSelectedEventType(e.target.value)}
                                >
                                    <option value="">All Types</option>
                                    {eventTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <ArrowDown size={14} className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto mb-3 lg:mb-0">
                            <label className="block text-sm font-semibold text-gray-700 sr-only">Time Period</label>
                            <div className="flex rounded-lg shadow-sm overflow-hidden">
                                {["all", "upcoming", "past"].map((view) => (
                                    <button
                                        key={view}
                                        type="button"
                                        className={`px-3 py-2 text-sm font-medium transition duration-150 ease-in-out ${
                                            filterView === view
                                                ? "bg-indigo-600 text-white shadow-inner"
                                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                                        } ${view === 'all' ? 'rounded-l-lg' : ''} ${view === 'past' ? 'rounded-r-lg' : ''} ${view !== 'all' && view !== 'past' ? 'border-r border-l' : ''}`}
                                        onClick={() => setFilterView(view)}
                                    >
                                        {view.charAt(0).toUpperCase() + view.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {hasActiveFilters && (
                            <div className="hidden lg:block w-auto">
                                <button
                                    className="p-2.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 hover:text-red-600 transition"
                                    onClick={clearFilters}
                                    title="Clear all filters"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                        {hasActiveFilters
                            ? `Showing ${filteredEvents.length} of ${events.length} total events.`
                            : `${events.length} total events.`
                        }
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {error && (
                    <div className="p-4 rounded-lg bg-red-100 text-red-800 border border-red-200" role="alert">
                        <p className="font-semibold">Error:</p> {error}
                    </div>
                )}

                {filteredEvents.length === 0 && !error && (
                    <div className="text-center py-16 bg-white rounded-xl shadow-lg mt-4">
                        <Calendar size={64} className="text-gray-300 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-700">No events found</h4>
                        <p className="text-gray-500 mt-2">
                            {hasActiveFilters
                                ? "Try adjusting your filters to see more events."
                                : "There are no events available at the moment."}
                        </p>
                        {hasActiveFilters && (
                            <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition" onClick={clearFilters}>
                                Clear Filters
                            </button>
                        )}
                    </div>
                )}

                <div className="flex flex-wrap -m-2 mt-4">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventCalendarPage;