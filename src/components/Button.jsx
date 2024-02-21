// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Button(props) {
    return (
      <div className="button">
      <button css={css`
            padding: 25px;
            font-size: 24px;
	        border-radius: 10px;
            width: 200px;
            background-color: ${props.color}};
              `}>
        Button
           </button>
           </div>
    )
  }
