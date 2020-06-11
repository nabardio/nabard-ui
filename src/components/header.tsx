import React from 'react';
import { Button, Grid, Image, Menu } from 'semantic-ui-react';

export default function Header(): JSX.Element {
    return (
        <Menu borderless secondary fixed="top">
            <Grid container columns={3} verticalAlign="middle" padded="vertically">
                <Grid.Row>
                    <Grid.Column>
                        <Image src="/logo.png" size="tiny" />
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Menu borderless compact style={{ borderRadius: 50 }}>
                            <Menu.Item name="home" />
                            <Menu.Item name="matches" />
                            <Menu.Item name="games" />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Button className="tertiary">Sign in</Button>
                        <Button primary>Sign up</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Menu>
    );
}
