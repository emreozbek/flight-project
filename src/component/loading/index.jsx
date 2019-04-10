import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import "./styles.scss";

export function Loading(props) {
  return (
    <div
      className={classNames({
        overlay: true,
        "overlay--active": props.loading
      })}
    >
      <div className="loading-animation">
        <div className="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  loading: state.reducer.loading
});
export default connect(mapStateToProps)(Loading);
