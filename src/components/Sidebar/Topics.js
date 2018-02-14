import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import './Topics.less';

class Topics extends React.Component {
  static propTypes = {
    favorite: PropTypes.bool,
    topics: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    favorite: false,
    topics: [],
    loading: false,
  };

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
    const { topics, favorite, loading } = this.props;

    const displayedTopics = this.state.showMore ? topics : topics.slice(0);

    return (
      <div className="Topics">
        {loading && <Loading center={false} />}
        {!loading && <ul className="Topics__list">
          {displayedTopics.map(topic =>
            (<li key={topic}>
              <Topic name={topic} favorite={favorite} />
            </li>),
          )}
        </ul>}       
      </div>
    );
  }
}

export default Topics;
