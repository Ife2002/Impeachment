import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text, Tailwind } from '@react-email/components';
import * as React from 'react';

const Template = ({
  username = 'newuser',
  session 
}: WelcomeEmailProps) => {
  const previewText = `Session code!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="my-10 mx-auto p-5 w-[465px]">
          <Section className="mt-8">
            <Img
              src={`https://media.wired.com/photos/5955bf1396d7ef123a1d443d/master/w_2560%2Cc_limit/GettyImages-519326957-TOP-ART.jpg`}
              width="80"
              height="80"
              alt="Logo Example"
              className="my-0 mx-auto"
            />
          </Section>
          <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
            Hello Mechatronics 400lvl student!
          </Heading>
          <Text className="text-sm">
            Vote of no cofindence poll
          </Text>
          <Text className="text-sm">
            {session}
          </Text>
          <Text className="text-sm">
            You've received this email because you are eligible to pass a vote for or against the impeachment of the current course rep.
          </Text>
          <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#00A3FF] rounded p-5 text-white text-xs font-semibold no-underline text-center"
                href={`https://3000-ife2002-impeachment-xw16ije4q8q.ws-eu106.gitpod.io/${session}`}
              >
                Proceed to vote
              </Button>
          </Section>
          <Text className="text-sm">
            Vote Independently,
            <br/>
            Gorrila X
          </Text>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
};

interface WelcomeEmailProps {
  username?: string;
  session?: string;
}

const baseUrl = process.env.URL
  ? `https://${process.env.URL}`
  : '';

export default Template;