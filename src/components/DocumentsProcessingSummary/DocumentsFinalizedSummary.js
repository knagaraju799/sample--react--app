import React from "react";
import "./DocumentsFinalizedSummary.scss";

const DocumentsFinalizedSummary = (props) => {
  const { documentsFinalizedSummary } = props;
  const { documents_finalized_summary } = documentsFinalizedSummary;

  if (documents_finalized_summary !== undefined) {
    var { documents_reviewed, documents_review_pending, documents_flagged } =
      documents_finalized_summary;
  }

  if (documents_finalized_summary !== undefined) {
    return (
      <div className="documentsFinalizedSummary">
        <div className="documentsFinalizedSummary--Div">
          <div className="documentsFinalizedSummary--Div--Title">
            <span className="sectionTitle">Documents Finalized Summary</span>
          </div>
          <div className="documentsFinalizedSummary--Summary">
            <span className="documentsFinalizedSummary--Summary--Span--MarginBottom">
              <span className="generalFont documentsFinalizedSummary--Summary--MarginBot">
                Documents Reviewed
              </span>
              <span className="documentsFinalizedSummary--Summary">
                {documents_reviewed !== undefined ? (
                  <div className="documentsFinalizedSummary--Summary--Div">
                    <span className="flag">{documents_reviewed.figure}</span>
                    <span className="documentsFinalizedSummary--Delta">
                      ( {documents_reviewed.delta} %)
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </span>
            </span>
            <span className="documentsFinalizedSummary--Summary--Span--MarginBottom">
              <span className="generalFont documentsFinalizedSummary--Summary--MarginBot">
                Documents Review Pending
              </span>
              <span className="documentsFinalizedSummary--Summary">
                {documents_review_pending !== undefined ? (
                  <div className="documentsFinalizedSummary--Summary--Div">
                    <span className="flag">
                      {documents_review_pending.figure}
                    </span>
                    <span className="documentsFinalizedSummary--Delta">
                      ( {documents_review_pending.delta} %)
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </span>
            </span>
            <span className="documentsFinalizedSummary--Summary--Span--MarginBottom">
              <span className="generalFont documentsFinalizedSummary--Summary--MarginBot">
                Review Required
              </span>
              {documents_flagged !== undefined ? (
                <div className="documentsFinalizedSummary--Summary--Div">
                  <span className="flag">{documents_flagged.figure}</span>
                  <span className="documentsFinalizedSummary--Delta">
                    ( {documents_flagged.delta} %)
                  </span>
                </div>
              ) : (
                <></>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default DocumentsFinalizedSummary;
