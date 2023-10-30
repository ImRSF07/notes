import { Link } from 'react-router-dom';

import styled from 'styled-components';

const LinkItem = ({ toUrl, text }) => {
  return (
    <LinkContainer>
      <Link className='link' to={toUrl}>
        {text}
      </Link>
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  .link {
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;

    &:hover {
      color: #fd2055;
    }
  }
`;

export default LinkItem;
