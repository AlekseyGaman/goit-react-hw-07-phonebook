import styled from 'styled-components';

export const ContactListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ContactLi = styled.li`
  display: flex;
  max-width: 500px;
  gap: 20px;

  & p {
    font-size: 20px;
    display: list-item;
    width: 200px;
  }
  & span {
    font-size: 20px;
    width: 140px;
  }
  & button {
    padding: 7px;
    width: 66px;
    max-height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    margin-left: auto;
    transition: 0.5s;
    &:hover,
    :focus {
      background-color: #2f5870;
      color: #ffffff;
    }
  }
`;
