import { useState } from 'react';

function Collapse(props) {
  const [isOpen, setOpen] = useState(false);
  const isString = typeof props.CollapseText === 'string';

  return (
    <div
      className={`${props.CollapseClass} ${!isOpen ? 'closed' : 'open'}`}
      onClick={() => setOpen(!isOpen)}
    >
      <div className={props.CollapseClassTitleChevron}>
        <h1 className={props.CollapseClassTitle}>{props.CollapseTitle}</h1>
        {isOpen ? (
          <span className="collapse__chevron open"></span>
        ) : (
          <span className="collapse__chevron"></span>
        )}
      </div>
      {isOpen ? (
        <div className={`${props.CollapseClassContainer} open`}>
          {isString ? (
            <p className={`${props.CollapseClassText} open`}>
              {props.CollapseText}
            </p>
          ) : (
            props.CollapseText.map((text, index) => (
              <p key={index} className={`${props.CollapseClassText} open`}>
                {text}
              </p>
            ))
          )}
        </div>
      ) : (
        <div className={`${props.CollapseClassContainer} closed`}>
          {isString ? (
            <p className={`${props.CollapseClassText} closed`}>
              {props.CollapseText}
            </p>
          ) : (
            props.CollapseText.map((text, index) => (
              <p key={index} className={`${props.CollapseClassText} closed`}>
                {text}
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
