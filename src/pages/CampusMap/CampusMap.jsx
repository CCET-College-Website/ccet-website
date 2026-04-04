import React, { useState } from 'react';
import styles from './CampusMap.module.css';
import satelliteImage from '../../assets/CampusMap/CampusMap.PNG';

const CampusMap = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [viewMode, setViewMode] = useState('map'); // 'map' or 'satellite'

    const locations = [
        { id: 'Diploma', name: '1. Diploma Block', color: '#692eff' },
        { id: 'Basketball', name: '2. Basketball Court', color: '#73001d' },
        { id: 'Auditorium', name: '3. Auditorium', color: '#00acff' },
        { id: 'Old_Canteen', name: '4. Old Canteen', color: '#a23b00' },
        { id: 'Canteen', name: '5. Main Canteen', color: '#b9b600' },
        { id: 'Block_A', name: '6. Block A', color: '#8b98ff' },
        { id: 'Academics_Dept', name: '7. Academics Department', color: '#e573ff' },
        { id: 'Mechanical_Dept', name: '8. Mechanical Department', color: '#d08100' },
        { id: 'Workshop', name: '9. Workshop', color: '#8b7d00' },
        { id: 'Girls_Hostel', name: 'GH. Girls Hostel', color: '#e75400' },
        { id: 'Boys_Hostel', name: 'BH. Boys Hostel', color: '#00328b' },
        { id: 'Playground', name: 'PG. Playground', color: '#008b0f' },
        { id: 'Parking', name: 'P. Parking', color: '#66646a' },
        { id: 'Gate', name: 'Gates', color: '#ff8b8b' }
    ];

    const handleLocationClick = (locationId) => {
        setSelectedLocation(locationId);

        if (viewMode === 'map') {
            // Add highlight effect for SVG map
            const targetElement = document.getElementById(locationId);
            if (targetElement) {
                const shapes = targetElement.querySelectorAll('path, polygon, rect');
                shapes.forEach(shape => {
                    shape.classList.add(styles.highlight);
                });

                // Remove highlight after 2 seconds
                setTimeout(() => {
                    shapes.forEach(shape => {
                        shape.classList.remove(styles.highlight);
                    });
                }, 2000);
            }
        }
    };

    const handleLocationHover = (locationId, isHovering) => {
        if (viewMode === 'map') {
            const targetElement = document.getElementById(locationId);
            if (targetElement) {
                const shapes = targetElement.querySelectorAll('path, polygon, rect');
                shapes.forEach(shape => {
                    if (isHovering) {
                        shape.classList.add(styles.highlight);
                    } else {
                        shape.classList.remove(styles.highlight);
                    }
                });
            }
        }
    };

    const toggleViewMode = () => {
        setViewMode(viewMode === 'map' ? 'satellite' : 'map');
    };

    return (
        <div className={styles.campusMap}>
            <header className={styles.header}>
                <div className={styles.headerMain}>
                    <h1>Campus Map</h1>
                    <div className={styles.headerUnderline}></div>
                    <div className={styles.headerDescription}>
                        The college campus extends over an area of 46 acres (190,000 m²) of land situated close to the Shivalik ranges and Sukhna Lake. The campus is divided into zones like administration blocks for Degree and Diploma stream, and hostels and residential complex for faculty and staff. In addition to lecture halls, tutorial rooms and drawing halls, the college has an auditorium, library, computer centers, workshops, laboratories and playgrounds. The college has a branch of State Bank of Patiala with ATM facility, extension counter of Post Office and a canteen. The campus has a unit of the National Cadet Corps (NCC).
                    </div>
                </div>
            </header>

            <div className={styles.mainContainer}>
                <div className={styles.mapSection}>
                    <div className={styles.legend}>
                        <h2>Campus Locations</h2>
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                className={styles.legendItem}
                                onClick={() => handleLocationClick(location.id)}
                                onMouseEnter={() => handleLocationHover(location.id, true)}
                                onMouseLeave={() => handleLocationHover(location.id, false)}
                            >
                                <div
                                    className={styles.colorBox}
                                    style={{ backgroundColor: location.color }}
                                ></div>
                                <span>{location.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.mapContainer}>
                        {/* View Mode Toggle Switch */}
                        <div className={styles.viewToggle}>
                            <button
                                className={`${styles.toggleButton} ${viewMode === 'map' ? styles.active : ''}`}
                                onClick={toggleViewMode}
                            >
                                {viewMode === 'map' ? (
                                    <>
                                        🛰️ Satellite
                                    </>
                                ) : (
                                    <>
                                        🗺️ Map
                                    </>
                                )}
                            </button>
                        </div>

                        {viewMode === 'map' ? (
                            <svg className={styles.map} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1093.33 1080">
                                {/* SVG content remains the same */}
                                <defs>
                                    <style>{`
                      .cls-1 { fill: #692eff; }
                      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17 { stroke-miterlimit: 10; }
                      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-14, .cls-15, .cls-16, .cls-17 { stroke: #000; stroke-width: 1px; }
                      .cls-2 { fill: #e573ff; }
                      .cls-3 { fill: #8b98ff; }
                      .cls-4 { fill: #d08100; }
                      .cls-5 { fill: #e75400; }
                      .cls-6 { fill: #fff7d3; }
                      .cls-7 { fill: #00acff; }
                      .cls-8 { fill: #a23b00; }
                      .cls-9, .cls-13 { fill: #fff; }
                      .cls-10 { fill: #66646a; }
                      .cls-18 { letter-spacing: 0em; }
                      .cls-11 { fill: #00328b; }
                      .cls-12 { fill: #ff8b8b; }
                      .cls-13 { stroke: #fff; }
                      .cls-13, .cls-19 { font-family: SegoePrint, 'Segoe Print'; font-size: 36px; }
                      .cls-14 { fill: #8b7d00; }
                      .cls-15 { fill: #b9b600; }
                      .cls-20 { letter-spacing: 0em; }
                      .cls-16 { fill: #008b0f; }
                      .cls-21 { letter-spacing: .02em; }
                      .cls-22 { letter-spacing: -.02em; }
                      .cls-17 { fill: #73001d; }
                    `}</style>
                                </defs>

                                <g id="Back">
                                    <rect className="cls-9" x="50.5" y="36.5" width="944" height="996"/>
                                </g>

                                <g id="Main_Background">
                                    <path className="cls-6" d="M50.5,1032.5h944.46l-.46-121,.46-65.06v-58.08l1.54-117.86h0l1-392-3-242-427,2-108-2s-9,51-12,64-16,56-20,67-33,79-42,98-56,109-67,125-51,80-61,95-42,72-52,98-19,35-32,72-29,79-43,104-24,47-37,79-25,57-30,89-7,37-10,71l-3,34Z"/>
                                </g>

                                <g id="Workshop" className={styles.location}>
                                    <polygon className="cls-14" points="568.5 383.5 670.5 339.5 703.5 407.5 601.5 455.5 609.5 473.5 601.5 476.5 550.5 374.5 561.5 369.5 568.5 383.5"/>
                                    <text className="cls-13" transform="translate(617.16 407.56)">
                                        <tspan x="0" y="0">9</tspan>
                                    </text>
                                </g>

                                <g id="Block_A" className={styles.location}>
                                    <polygon className="cls-3" points="483.5 524.5 496.5 556.5 516.5 547.5 523.5 563.5 506.5 572.5 521.5 608.5 556.5 594.5 551.5 584.5 566.5 577.5 571.5 589.5 651.5 554.5 643.5 536.5 649.5 533.5 655.5 546.5 674.56 540 634.5 455.5 609.5 464.5 613.5 473.5 600.5 477.5 596.5 466.5 529.5 496.5 533 507.68 512.5 514.5 508.5 506.5 480.5 518.5 483.5 524.5"/>
                                    <text className="cls-13" transform="translate(564.08 539.88)">
                                        <tspan x="0" y="0">6</tspan>
                                    </text>
                                </g>

                                <g id="Academics_Dept" className={styles.location}>
                                    <polygon className="cls-2" points="438.5 443.5 467.5 507.5 558.5 470.5 528.5 402.5 438.5 443.5"/>
                                    <text className="cls-13" transform="translate(478.32 467.4)">
                                        <tspan x="0" y="0">7</tspan>
                                    </text>
                                </g>

                                <g id="Mechanical_Dept" className={styles.location}>
                                    <polygon className="cls-4" points="399.5 340.5 416.5 374.5 435.5 365.5 443.5 380.5 423.5 389.5 440.5 426.5 474.5 411.5 469.5 400.5 484.5 393.5 489.5 403.5 557.5 372.5 552.5 361.5 562.5 356.5 567.5 364.5 589.5 355.5 572.5 326.5 563.5 330.5 557.5 317.5 568.5 311.5 550.5 274.5 534.5 280.5 541.5 294.5 522.5 303.5 512.5 282.5 446.5 313.5 452.5 325.5 432.5 335.5 426.5 322.5 397.5 335.5 399.5 340.5"/>
                                    <text className="cls-13" transform="translate(480.96 357.84)">
                                        <tspan x="0" y="0">8</tspan>
                                    </text>
                                </g>

                                <g id="Parking" className={styles.location}>
                                    <path className="cls-10" d="M306.5,475.5l91-112.42,101,239.52-42,17.9-32-75s-26-18-44-28-74-42-74-42Z"/>
                                    <polygon className="cls-10" points="394 328 546.67 260.84 519 209 444 209 394 328"/>
                                    <path className="cls-10" d="M175.5,727.5l129,6s9,7,34-19l25-26-46-75-64,21-47-3-41,95,10,1Z"/>
                                    <polygon className="cls-10" points="551.5 708.5 577.53 761 617.5 744.5 593.2 692.5 551.5 708.5"/>
                                    <polygon className="cls-10" points="328 797.83 391.98 922 419 912.17 355.02 788 328 797.83"/>
                                    <text className="cls-13" transform="translate(247.08 691.24)">
                                        <tspan x="0" y="0">P</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(376.12 470.6)">
                                        <tspan x="0" y="0">P</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(457.76 262.28)">
                                        <tspan x="0" y="0">P</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(570.68 735.31)">
                                        <tspan x="0" y="0">P</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(355.68 856.24)">
                                        <tspan x="0" y="0">P</tspan>
                                    </text>
                                </g>

                                <g id="Basketball" className={styles.location}>
                                    <polygon className="cls-17" points="165.5 783.5 163.5 872.5 261.52 872.5 261.52 783.5 165.5 783.5"/>
                                    <text className="cls-13" transform="translate(200.08 835.2)">
                                        <tspan x="0" y="0">2</tspan>
                                    </text>
                                </g>

                                <g id="Auditorium" className={styles.location}>
                                    <polygon className="cls-7" points="469.5 679.5 479.5 699.5 471.5 703.5 482.5 722.5 589.5 675.5 567.5 634.5 469.5 679.5"/>
                                    <text className="cls-13" transform="translate(513.36 691.36)">
                                        <tspan x="0" y="0">3</tspan>
                                    </text>
                                </g>

                                <g id="Diploma" className={styles.location}>
                                    <polygon className="cls-1" points="312.5 752.5 322.5 777.5 331.5 775.5 335.5 785.5 357.5 775.5 444.5 960.5 473.5 946.5 500.5 1004.5 516.5 997.5 519.28 1004.5 598.5 973.5 610.96 1004.5 622.5 999.5 610.5 969.5 696.5 933.5 618.16 752.5 572.5 771.5 555.5 730.5 478.5 763.5 445.5 692.5 312.5 752.5"/>
                                    <text className="cls-13" transform="translate(504.8 854.66) scale(1.14 1)">
                                        <tspan x="0" y="0">1</tspan>
                                    </text>
                                </g>

                                <g id="Canteen" className={styles.location}>
                                    <path className="cls-15" d="M584.5,630.08l28,65.42,90.86-3,3.14-77s-93-13.84-122,14.58Z"/>
                                    <text className="cls-13" transform="translate(639.12 660.12)">
                                        <tspan x="0" y="0">5</tspan>
                                    </text>
                                </g>

                                <g id="Girls_Hostel" className={styles.location}>
                                    <rect className="cls-5" x="727" y="635" width="119" height="56"/>
                                    <text className="cls-13" transform="translate(753.8 673.04)">
                                        <tspan x="0" y="0">GH</tspan>
                                    </text>
                                </g>

                                <g id="Boys_Hostel" className={styles.location}>
                                    <polygon className="cls-11" points="751.5 456.5 744.5 575.5 771.76 575.5 805.5 577.5 822.5 599.5 849.5 581.5 881.5 584.5 912.5 587.5 918.5 466.5 751.5 456.5"/>
                                    <polygon className="cls-11" points="769.5 269.5 759.28 426.5 925.5 433.5 934.5 277.5 769.5 269.5"/>
                                    <text className="cls-13" transform="translate(798.16 528.12)">
                                        <tspan x="0" y="0">BH</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(808.68 357.79)">
                                        <tspan x="0" y="0">BH</tspan>
                                    </text>
                                </g>

                                <g id="Playground" className={styles.location}>
                                    <path className="cls-16" d="M133.5,879.5s-29,121-8,140,8,9.1,8,9.1l289-6.1-121-237-36.14-2,.14,93-131.18-4-.82,7Z"/>
                                    <path className="cls-16" d="M611.5,703.5l120,285.5s26,2.5,43-9.5,40-24,48-25,93-4,93,0,10.82-251,10.82-251c0,0-314.82-12-314.82,0Z"/>
                                    <polygon className="cls-16" points="452.5 193.5 710.56 209 721.5 54.5 488.5 43.5 452.5 193.5"/>
                                    <path className="cls-16" d="M535.5,220.5l.33.63,67.81,129.37,97.86-45,4-80s-171-11-170-5Z"/>
                                    <text className="cls-13" transform="translate(220.44 947.28)">
                                        <tspan className="cls-20" x="0" y="0">P</tspan>
                                        <tspan x="25.17" y="0">G</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(755.85 830.07)">
                                        <tspan className="cls-20" x="0" y="0">P</tspan>
                                        <tspan x="25.17" y="0">G</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(561.85 130.95)">
                                        <tspan className="cls-20" x="0" y="0">P</tspan>
                                        <tspan x="25.17" y="0">G</tspan>
                                    </text>
                                    <text className="cls-13" transform="translate(595.85 284.95)">
                                        <tspan className="cls-20" x="0" y="0">P</tspan>
                                        <tspan x="25.17" y="0">G</tspan>
                                    </text>
                                </g>

                                <g id="Old_Canteen" className={styles.location}>
                                    <path className="cls-8" d="M338.8,507.5s-38.3,1-45.3,19-5,20,4,30,41.3,35.54,41.3,35.54c0,0,13.3,17.46,12,28.46-1.3,11,18.7,29,18.7,29,0,0,79,33,86,14s-5-39-5-39c0,0-34-69-45-78s-42.4-43-66.7-39Z"/>
                                    <text className="cls-13" transform="translate(355.6 577.88)">
                                        <tspan x="0" y="0">4</tspan>
                                    </text>
                                </g>

                                <g id="Gate" className={styles.location}>
                                    <polygon className="cls-12" points="146.93 740.43 144.5 747.72 155.01 749.71 152.59 757 172 751.03 160.92 736.36 158.25 743.52 146.93 740.43"/>
                                    <polygon className="cls-12" points="314.81 409.94 312.38 417.89 322.94 420.05 320.5 428 340 421.5 328.87 405.5 326.19 413.31 314.81 409.94"/>
                                </g>
                            </svg>
                        ) : (
                            <div className={styles.satelliteView}>
                                <img
                                    src={satelliteImage}
                                    alt="CCET Campus Satellite View"
                                    className={styles.satelliteImage}
                                />
                                <div className={styles.satelliteOverlay}>
                                    <p>🛰️ Satellite View</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.googleMap}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13739.92519352264!2d76.7738658!3d30.7276477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing%2C%20Sector%2026%2C%20Chandigarh%2C%20160019!5e0!3m2!1sen!2sin!4v1714478134850!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="CCET Campus Location"
                    />
                </div>
            </div>

            <footer className={styles.footer}>
                &copy; 2025 CCET Campus Map | Designed for Chandigarh College of Engineering and Technology
            </footer>
        </div>
    );
};

export default CampusMap;