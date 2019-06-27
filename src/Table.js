import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
class Table extends Component {
  //componentDidMoubt
  componentDidMount() {
    this.props.fetchData();
  }

  //Render table data

  renderHeadings() {
    let headings = ["Name", "Email", "City", "Company"];
    return headings.map((header, i) => {
      return <th key={i}>{header}</th>;
    });
  }
  renderTable() {
    return this.props.data.map((user, i) => {
      return (
        <tr key={i}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <table className="main">
        <thead>
          <tr>{this.renderHeadings()}</tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}
//mapstatetoprops
const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};
//mapdispatchtoProps
const matchDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

//connect
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Table);
