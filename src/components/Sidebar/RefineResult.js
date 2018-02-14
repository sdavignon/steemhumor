import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import './RefineResult.less';

class RefineResult extends React.Component {

	static propTypes = {
		topics: PropTypes.arrayOf(PropTypes.string),
		maxItems: PropTypes.number
	};

	static defaultProps = {
		topics: [],
		maxItems: 5,
    }

	constructor(props) {
		super(props);
		this.state = {
			showMore: false,
		};
	}

	changeVisibility(showMore) {
		this.setState({ showMore });
	}

	render() {
		const { topics, maxItems } = this.props;
		const displayedTopics = this.state.showMore ? topics : topics.slice(0, maxItems);
		return (
			<div className="RefineResult">
				<h3>Refine Results</h3>

				<div className="Category">
					<p className="CategoryTitle"><a href="#">All in Programming &amp; Tech</a></p>
					<p className="CategorySubTitle"><a href="#">Worpress</a></p>
					<div className="CategoryList">
						<ul>
							<li><a href="#">Full Website Creation</a></li>
							<li><a href="#">Customization</a></li>
							<li><a href="#">WP Installation &amp; Setup</a></li>
							<li><a href="#">Bug Fixes</a></li>
							<li><a href="#">Backup, Cloning &amp; Migration</a></li>
							<li><a href="#">Performance &amp; SEO</a></li>
							<li><a href="#">Landing Page</a></li>
							<li><a href="#">Security</a></li>
							<li><a href="#">Help/Consultation</a></li>
						</ul>
					</div>
				</div>

				<div className="DeliveryTime BorderTopSeperator">
					<h4>Delivery Time</h4>

					<div className="InputTypeRadio">
						<input type="radio" id="radio01" name="radio" />
						<label htmlFor="radio01">Up to 24 hours</label>
					</div>

					<div className="InputTypeRadio">
						<input type="radio" id="radio02" name="radio" />
						<label htmlFor="radio02">Up to 3 days</label>
					</div>

					<div className="InputTypeRadio">
						<input type="radio" id="radio03" name="radio" />
						<label htmlFor="radio03">Up to 7 days</label>
					</div>

					<div className="InputTypeRadio">
						<input type="radio" id="radio04" name="radio" />
						<label htmlFor="radio04">Any</label>
					</div>
				</div>

				<div className="PriceRange BorderTopSeperator">
					<h4>Price Range</h4>

					<i className="Currency">$</i>
		            
		            <div className="InputTypeNumber PriceRangeField">
		            	<input type="number" name="" />
		            </div>

		            <span className="SeperatorText">to</span>

		            <i className="Currency">$</i>

		            <div className="InputTypeNumber PriceRangeField">
		            	<input type="number" name="" />
		            </div>
		            
		            <a href="#" className="PriceRangeBtn">></a>
				</div>

				<div className="OnlineStatus BorderTopSeperator">
					<h4>Online Status</h4>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck01" name="checkboxOS" />
						<label htmlFor="chck01">Show Online Sellers</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>
				</div>

				<div className="IntegratingPlugins CheckBoxType BorderTopSeperator">
					<h4>Integrating Plugins</h4>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck01a" />
						<label htmlFor="chck01a">Contact Form 7</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck02a" />
						<label htmlFor="chck02a">WooCommerce</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck03a" />
						<label htmlFor="chck03a">Facebook</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="ShowMoreLess">
						<span>+ Show More</span>
					</div>
				</div>

				<div className="ServiceIncludes CheckBoxType BorderTopSeperator">
					<h4>Service Includes</h4>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck01b" />
						<label htmlFor="chck01b">Responsive Design</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck02b" />
						<label htmlFor="chck02b">Content Upload</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck03b" />
						<label htmlFor="chck03b">Design Customization</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="ShowMoreLess">
						<span>+ Show More</span>
					</div>
				</div>

				<div className="SellerLevel CheckBoxType BorderTopSeperator">
					<h4>Seller Level</h4>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck01c" />
						<label htmlFor="chck01c">New Seller</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck02c" />
						<label htmlFor="chck02c">Level One</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck03c" />
						<label htmlFor="chck03c">Level Two</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck04c" />
						<label htmlFor="chck04c">Top Rated Seller</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="ShowMoreLess">
						<span>+ Show More</span>
					</div>
				</div>

				<div className="SellerLanguage CheckBoxType BorderTopSeperator">
					<h4>Seller Language</h4>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck01d" />
						<label htmlFor="chck01d">English</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck02d" />
						<label htmlFor="chck02d">Urdu</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>

					<div className="InputTypeCheckbox">
						<input type="checkbox" id="chck03d" />
						<label htmlFor="chck03d">Hindi</label>

						<div className="OnlineNumbers">(4454)</div>
					</div>
					
					<div className="ShowMoreLess">
						<span>+ Show More</span>
					</div>
				</div>
			</div>
		);
	}
}

export default RefineResult;
