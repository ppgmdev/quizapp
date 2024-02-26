import { Card, useTheme } from '@aws-amplify/ui-react';

export default function MyQuizzes() {

    const { tokens } = useTheme();

    return (
        <>
            <Card className='card-quiz' variation="elevated">Elevated card</Card>
            <Card className='card-quiz' variation="elevated">Elevated card</Card>
            <Card className='card-quiz' variation="elevated">Elevated card</Card>
        </>
    )
}
