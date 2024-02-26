import { useRef } from 'react';

import { Radio, RadioGroupField, Flex, Label, Input } from '@aws-amplify/ui-react';

export default function CreateQuizOptions({number}) {

    const refOption1 = useRef();
    const refOption2 = useRef();
    const refOption3 = useRef();
    const refOption4 = useRef();

    return (
        <>
            <Flex direction="column" gap="small">
                <Label htmlFor="first_name">Question {number.toString()}: </Label>
                <Input id="first_name" name="first_name" />
            </Flex>
            <RadioGroupField legend="Options. Select the correct one" name="animal" defaultValue="Dog">
                <Radio><Input ref={refOption1}/></Radio>
                <Radio><Input ref={refOption2}/></Radio>
                <Radio><Input ref={refOption3}/></Radio>
                <Radio><Input ref={refOption4}/></Radio>
            </RadioGroupField>
        </>
    )
}