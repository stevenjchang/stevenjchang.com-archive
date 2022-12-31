/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';

const Section = styled.section`
  height: 400px;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 200px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 200px 0;
`;
const Content = styled.div`
  background-color: #4f43ff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 275px;
  padding: 80px;
  font-size: 46px;
  font-weight: 500;
  border-radius: 47px;
`;

const Cta = styled.div`
  padding-bottom: 0px;
  border-bottom: 5px solid #786ffc;
`;

const HireMeSection = () => {
  return (
    <Section>
      <Wrapper>
        <Content>
          <h1>
            Need a website <br />
            for your startup?
          </h1>
          <Cta>
            <h1>Let's talk! &nbsp;&nbsp;</h1>
          </Cta>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default HireMeSection;
