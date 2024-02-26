import { Tabs } from '@aws-amplify/ui-react';

import CreateQuizForm from './CreateQuizForm';

export default function MenuApp() {
    return (
        <Tabs
            defaultValue={'Tab 1'}
            items={[
                { label: 'Create Quiz', value: 'Tab 1', content: <CreateQuizForm></CreateQuizForm> },
                { label: 'Play!', value: 'Tab 2', content: <p>My quizes!</p> },
            ]}
        />
    );
};
