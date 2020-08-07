import React from 'react';
import Item from 'components/Item';
export default class FrontEnd extends React.Component<any, any> {
  state = {
    list: [],
  };
  async componentDidMount() {
    
  }
  render() {
    return (
      <div className="blog_frontEnd">
        {this.state.list.map((ele, index) => (
          <Item data={ele} key={index} />
        ))}
      </div>
    );
  }
}
