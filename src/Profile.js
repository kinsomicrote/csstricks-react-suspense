import React, { Fragment } from 'react';
import loadProfiles from './fetcher'
import { withCache } from './withCache';

const cardWidth = {
    width: '20rem'
}

const Profile = withCache( (props) => {

    const data = loadProfiles(props.cache);
    return (
    <Fragment>
        {
            data.results.map(item => (
            <div key={item.login.uuid} className="card" style={cardWidth}>
                <div>
                    <img src={item.picture.thumbnail} />
                </div>
                <p>{item.email}</p>
            </div>
            ))
        }
    </Fragment>
    )
});

export default Profile