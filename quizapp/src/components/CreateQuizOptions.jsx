import { useEffect, forwardRef } from 'react';

import { Radio, RadioGroupField, Flex, Label, Input } from '@aws-amplify/ui-react';

const CreateQuizOptions = forwardRef(function QuizOptions({number}, ref) {

    const {refQuestion, refOption1, refOption2, refOption3, refOption4, refRadio1, refRadio2, refRadio3, refRadio4} = ref;

    useEffect(() => {
        refQuestion.current.value = ""
        refOption1.current.value = ""
        refOption2.current.value = ""
        refOption3.current.value = ""
        refOption4.current.value = ""
        refRadio1.current.checked = false;
        refRadio2.current.checked = false;
        refRadio3.current.checked = false;
        refRadio4.current.checked = false;
    },)

    return (
        <>
            <Flex direction="column" gap="small">
                <Label>Question {number.toString()}: </Label>
                <Input ref={refQuestion} />
            </Flex>
            <RadioGroupField legend="Options. Select the correct one" name="animal" defaultValue="Dog">
                <Radio ref={refRadio1} value='1'></Radio><Input ref={refOption1}/>
                <Radio ref={refRadio2} value='2'></Radio><Input ref={refOption2}/>
                <Radio ref={refRadio3} value='3'></Radio><Input ref={refOption3}/>
                <Radio ref={refRadio4} value='4'></Radio><Input ref={refOption4}/>
            </RadioGroupField>
        </>
    )
}
)
export default CreateQuizOptions