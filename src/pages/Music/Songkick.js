import React, { useEffect } from 'react';
import '../themeSelector/ThemeSelector.css';

const Songkick = ({ changeTheme }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget-app.songkick.com/injector/9910004';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
        
      }, []);
    
    return (
        <div className="songkick">
            <main>
                <a
                    href="https://www.songkick.com/artists/9910004"
                    className="songkick-widget"
                    data-theme="dark"
                    data-track-button="on"
                    data-detect-style="off"
                    data-background-color="rgb(0,0,0,0)"
                    data-font-color="rgb(0,0,0,1)"
                    data-button-bg-color="rgb(240, 82, 34, 1)"
                    data-button-text-color="rgb(255,255,255,1)"
                    data-locale="en"
                    data-other-artists="on"
                    data-share-button="on"
                    data-country-filter="on"
                    data-rsvp="on"
                    data-request-show="on"
                    data-past-events="on"
                    data-past-events-offtour="off"
                    data-remind-me="off"
                    style={{ display: 'none' }}
                >

                </a>
            </main>
        </div>
    );
}

export default Songkick;