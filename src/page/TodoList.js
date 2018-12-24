import React from 'react';
// import AddTodo from '../component/AddTodo';
import { connect } from 'react-redux';
import { addTodo, deletTodo } from '../redux/Actions';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.click = this.click.bind(this);
    this.textMoudle = React.createRef();
    this.addTodoMoudle = React.createRef();
  }

  componentDidMount() {
    const me = this;
    me.textRef = me.textMoudle.current;
    me.addTodoRef = me.addTodoMoudle.current;
  }

  click() {
    const me = this;
    const text = me.textRef.value;
    this.props.dispatch(addTodo(text));
    // me.addTodoRef.setData([text]);
  }

  dealDate() {
    console.log(this.props)
    let data = this.props.text || [{}];
    let index = 0;
    return data.map((s, i) => {
      if (!s.isDelet) {
        index++;
        return (
          <div key={'list' + i}>
            <span>{index}·</span>
            <span style={{ color: s.isDelet ? '#fff' : '#000' }}>{s.text}</span>
            <span style={{ cursor: 'pointer' }} onClick={this.deletItem.bind(this, i)}>x</span>
          </div>
        );
      } else {
        return false;
      }
    });
  }

  deletItem(index) {
    this.props.dispatch(deletTodo(index));
  }

  render() {
    return (
      <div>
        <input ref={this.textMoudle} />
        <button onClick={this.click}>提交</button>
        <div>
          {this.dealDate()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  if (state) {
    console.log(state)
    return {
      text: state.todos,
    };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(Page);
