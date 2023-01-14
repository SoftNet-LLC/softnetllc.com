import { Container, Stack } from '@mui/system';
import Image from 'next/image';

import { ActionButton } from 'components/shared/button';
import { H1 } from 'components/shared/heading';
import { FC } from 'react';
import { HomeActionWrap } from './styles';

const HomeAction: FC = () => {
    return (
        <HomeActionWrap>
            <Container>
                <Stack
                    spacing={6}
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                >
                    <div>
                        <Image
                            src="/images/illus2.svg"
                            width="500"
                            height="300"
                            alt=""
                        />
                    </div>

                    <Stack spacing={5}>
                        <H1>have a project?</H1>
                        <ActionButton variant="outlined">
                            Start conversation
                        </ActionButton>
                    </Stack>
                </Stack>
            </Container>
        </HomeActionWrap>
    );
};

export default HomeAction;
