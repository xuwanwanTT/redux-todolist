import React from 'react';
import { connect } from 'react-redux';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  dealDate() {
    return this.props.text.map((s, i) => {
      return (
        <div key={'list' + i}><span>{i + 1}·</span>{s}</div>
      );
    })
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        {this.dealDate()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  if (state) {
    return {
      text: state.todos.map(s => s.text),
    };
  }
}

export default connect(mapStateToProps)(Page);