import { useRef, useEffect } from 'react';

import { Radio, RadioGroupField, Flex, Label, Input } from '@aws-amplify/ui-react';

export default function CreateQuizOptions({number}) {

    const refQuestion = useRef();
    const refOption1 = useRef();
    const refOption2 = useRef();
    const refOption3 = useRef();
    const refOption4 = useRef();

    useEffect(() => {
        refQuestion.current.value = ""
        refOption1.current.value = ""
        refOption2.current.value = ""
        refOption3.current.value = ""
        refOption4.current.value = ""
    },)

    return (
        <>
            <Flex direction="column" gap="small">
                <Label>Question {number.toString()}: </Label>
                <Input ref={refQuestion} />
            </Flex>
            <RadioGroupField legend="Options. Select the correct one" name="animal" defaultValue="Dog">
                <Radio></Radio><Input ref={refOption1}/>
                <Radio></Radio><Input ref={refOption2}/>
                <Radio></Radio><Input ref={refOption3}/>
                <Radio></Radio><Input ref={refOption4}/>
            </RadioGroupField>
        </>
    )
}