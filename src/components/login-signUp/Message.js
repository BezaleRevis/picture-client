import React from "react";
import "./popup.css";
// import CheckIcon  from '@material-ui/icons/Menu';
// import MaterialIcon from '@mui/icons-material';
import { Check2, X } from "react-bootstrap-icons";

export const Message = ({ trigger, setTrigger, message, className }) => {
  return trigger ? (
    <div
      onClick={(e) => e.stopPropagation()}
      id="myModal"
      className="popup-regMessage"
    >
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header">
            <div className="icon-box">
              <i className="material-icons">
                <span className="span-icon">
                  {className === "alert-success" ? <Check2 /> : <X />}
                </span>
              </i>
            </div>
          </div>
          <div className="modal-body">
            <div className="alert">{message}</div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setTrigger(false)}
              className="btn btn-success btn-block btn-ok"
              data-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
