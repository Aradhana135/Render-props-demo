import React from "react"
class RenderPropsComponent extends React.Component {
    render() {
      return (
        <div>
          <h2>I am Child Component</h2>
          {this.props.render()}
        </div>
      )
    }
  }
  export default RenderPropsComponent;