import { useState } from 'react';
import { Fieldset, Flex, Input, Label, Button } from '@aws-amplify/ui-react';

import CreateQuizOptions from './CreateQuizOptions';

export default function CreateQuizForm() {

    const [currentQuestion, setCurrentQuestion] = useState(1);

    function handleNextQuestion() {
        setCurrentQuestion((prevNumber) => prevNumber + 1 )
    }

    function handlePrevQuestion() {
        setCurrentQuestion((prevNumber) => prevNumber - 1)
    }

    return (
        <Fieldset legend="Create your Quiz!">
            <Flex direction="column" gap="small">
                <Label htmlFor="first_name">Quiz name: </Label>
                <Input id="first_name" name="first_name" />
            </Flex>
            <CreateQuizOptions number={currentQuestion}></CreateQuizOptions>
            <Flex>
                <Button onClick={handleNextQuestion}>Next question</Button>
                <Button onClick={handlePrevQuestion}>Prev question</Button>
                <Button>Ready!</Button>
            </Flex>
        </Fieldset>
    )
}