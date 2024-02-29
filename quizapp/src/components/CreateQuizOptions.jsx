import { useEffect, forwardRef } from 'react';

import { Radio, RadioGroupField, Flex, Label, Input } from '@aws-amplify/ui-react';

const CreateQuizOptions = forwardRef(function QuizOptions({number}, ref) {

    const {refQuestion, refOption1, refOption2, refOption3, refOption4} = ref;

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
)
export default CreateQuizOptions