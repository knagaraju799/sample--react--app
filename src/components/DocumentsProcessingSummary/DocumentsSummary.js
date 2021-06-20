import React from "react";
import "./DocumentsSummary.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const DocumentsSummary = (props) => {
  const { documentsSummary } = props;

  const { total_documents, documents_finalized, documents_review_required } =
    documentsSummary;

  if (documentsSummary) {
    return (
      <div className="documentsSummary">
        <div className="documentsSummary--Summary">
          <span className="documentsSummary--Summary--Span--MarginBottom">
            <span className="generalFont documentsSummary--Summary--MarginBot">
              Total Documents
            </span>
            <span className="flag ">{total_documents}</span>
          </span>
          <span className="documentsSummary--Summary--Span--MarginBottom">
            <span className="generalFont documentsSummary--Summary--MarginBot">
              Documents Finalized
            </span>
            <span className="documentsSummary--Summary">
              {documents_finalized !== undefined ? (
                <div className="documentsSummary--Summary--Div">
                  <span className="flag">{documents_finalized.figure}</span>
                  <span className="delta">
                    ( {documents_finalized.delta} %)
                  </span>
                </div>
              ) : (
                <></>
              )}
            </span>
          </span>
          <span className="documentsSummary--Summary--Span--MarginBottom">
            <span className="generalFont documentsSummary--Summary--MarginBot">
              Review Required
            </span>
            {documents_review_required !== undefined ? (
              <div className="documentsSummary--Summary--Div">
                <span className="flag">{documents_review_required.figure}</span>
                <span className="delta">
                  ( {documents_review_required.delta} %)
                </span>
              </div>
            ) : (
              <></>
            )}
          </span>
        </div>
        <div>
          <Button
            component={Link}
            to="/documents"
            variant="contained"
            style={{
              backgroundColor: "#43a047",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            View Documents
          </Button>
        </div>
      </div>
    );
  } else return <></>;
};

export default DocumentsSummary;
