import React from 'react';
import Navbar from '../Navbar/Navbar';

const LocationPage = ({ auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <div class="map-container w-full py-10">

                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1o_DXK09STh32KvT_qkvjDQ7BEbc0fZE&ehbc=2E312F" width="100%"
                    height="480"></iframe>
            </div>

        </>

    );
};

export default LocationPage;