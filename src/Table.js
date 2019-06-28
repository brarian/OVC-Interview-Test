import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
export class Table extends Component {
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
    const { data } = this.props;
    return data.map((user, i) => {
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
const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};

const matchDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Table);
