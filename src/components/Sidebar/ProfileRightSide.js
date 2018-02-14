import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import './ProfileRightSide.less';

class ProfileRightSide extends React.Component {

	render() {
		return (
			<div className="ProfileRightSide">
				<div className="ProfileStatus">
					<span>Online</span>	
				</div>
				<div className="ProfileImgWrap">
					<div className="ProfileImage">
						<span>J</span>
					</div>
					<div className="ProfileName">
						<span>Jhon Doe</span>
					</div>

					<div className="ProfileRatings">
						<div className="ProfileStars">
							<span className="star"></span>
							<span>5.0 (1k+ Reviews)</span>
						</div>
					</div>
					<div className="ProfileBtn">					
						<a href="#">Contact Me</a>
					</div>
				</div>

				<div className="ProfileDetails">
					<ul>
						<li>
							<span>From</span>
							<span>Pakistan</span>
						</li>
						<li>
							<span>Member since</span>
							<span>May 2014</span>
						</li>
						<li>
							<span>Avg. Response Time</span>
							<span>1 Hrs.</span>
						</li>
						<li>
							<span>Recent Delivery</span>
							<span>about 12 hours</span>
						</li>
					</ul>
				</div>

				<div className="ProfileDescription">
					<p>I am a professional WordPress expert. I have more than 4 years of Experience in configuring and troubleshooting WordPress. I can install, </p>

					<a href="#">+ Readmore</a>
				</div>
			</div>
		);
	}
}

export default ProfileRightSide;
