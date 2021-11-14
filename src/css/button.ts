import { css } from "lit-element";

export default css`
  button,
  .btn {
    cursor: pointer;
    border-radius: 4px;
    background-color: inherit;
    background-image: linear-gradient(0deg, rgba(127, 127, 127, 0.5) 0%, rgba(127, 127, 127, 0.5) 100%);
    color: inherit;
    border: 1px solid rgba(127, 127, 127, 0.5);
    height: 1.2rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  button:active,
  .btn:active {
    background-image: linear-gradient(0deg, rgba(127, 127, 127, 0.8) 0%, rgba(127, 127, 127, 0.2) 100%);
    transition-duration: 1s
  }

  button:hover,
  .btn:hover {
    background-image: linear-gradient(0deg, rgba(127, 127, 127, 0.2) 0%, rgba(127, 127, 127, 0.8) 100%);
    transition-duration: 1s
  }
`;
