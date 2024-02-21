// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Alert(props) {
    return (
      <div className="button">
      <button css={css`
            width: 360px;
            padding: 25px;
            font-size: 20px;
            text-align: left;
            border-radius: 20px;
            color: black;
            font-weight: bold;
            textAlign: left;
            background-color: ${props.color}};
              `}>
        <img src={props.img} width="20" height="20" style={{marginRight: '10px'}}/>
        {props.message}
           </button>
           </div>
    )
  }

