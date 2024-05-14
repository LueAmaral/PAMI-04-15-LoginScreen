import * as React from 'react';
import { ScrollView } from "react-native";
// @ts-ignore
import favicon from '../../assets/favicon.png';
import { Button } from "../../src/components/screen/button";
import { Input } from "../../src/components/screen/input";
import { Container, Content, Logo, Title } from "./styles";

// @ts-ignore
export const SignIn: React.FunctionComponent = ({navigation}) => {

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Content>
                    <Logo source={favicon}/>
                    <Title>Login</Title>
                    <Input placeholder="Email"/>
                    <Input secureTextEntry placeholder="Senha"/>
                    <Button title="Entrar"/>
                    <Button
                        title="Cadastre-se"
                        onPress={
                            () => navigation.navigate('SignUp')
                        }
                    />
                </Content>
            </Container>
        </ScrollView>
    );
};