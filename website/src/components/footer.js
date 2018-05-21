// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {PureComponent} from 'react';
import styled from 'styled-components';

import {cdnUrl} from '../utils';
import {LinkButton} from './common/styled-components';
import {media} from '../styles';

const Container = styled.div`
  background: #242730;
  padding: ${props => props.theme.margins.huge};
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.palm`
    flex-direction: column;
  `};
`;

const BrandingContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  ${media.palm`
    margin-top: ${props => props.theme.margins.small};
  `};
`;

const CreatedBy = styled.div`
  display: inline-flex;
  margin-left: 20px;
  align-items: center;
  color: ${props => props.theme.footerColor};
  font-size: 11px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 14px;
  width: 100%;
  z-index: 101;
`;

const StyledLogo = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  position: relative;
  margin-left: 1rem;
  margin-top: 0;
  margin-bottom: 0;

  a {
    color: #e5e5e4;
    letter-spacing: 2px;
  }

  :before {
    content: '';
    background: url(${cdnUrl('icons/viz_logo_bw.png')}) no-repeat;
    background-size: cover;
    height: 20px;
    width: 24px;
    position: absolute;
    top: -5px;
    left: -25px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;

  a {
    width: 160px;
  }

  ${media.palm`
    display: flex;
    justify-content: center;
    width: 100%;

    a {
      width: 50%;
    }
  `};
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <Container>
        <LogosContainer>
          <img src={cdnUrl('icons/kepler-logo.svg')} />
          <BrandingContainer>
            <img src={cdnUrl('icons/uber.svg')} />
            <CreatedBy>
              <StyledLogo className="fg">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://vis.gl"
                >
                  ISUALIZATION
                </a>
              </StyledLogo>
            </CreatedBy>
          </BrandingContainer>
        </LogosContainer>
        <ButtonContainer>
          <LinkButton large href="#/demo">
            Get Started
          </LinkButton>
          <LinkButton
            large
            outlineDark
            href="https://github.com/uber/kepler.gl"
            style={{marginLeft: '5px'}}
          >
            <img src={cdnUrl('icons/github.svg')} /> Github
          </LinkButton>
        </ButtonContainer>
      </Container>
    );
  }
}
