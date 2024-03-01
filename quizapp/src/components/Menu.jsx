import { Tabs } from '@aws-amplify/ui-react';
import CreateQuizForm from './CreateQuizForm';
import MyQuizzes from './MyQuizzes';
import CurrentGame from './CurrentGame';

export default function MenuApp() {
    
    return (
        <Tabs
            defaultValue={'Tab 1'}
            items={[
                { label: 'Create Quiz', value: 'Tab 1', content: <CreateQuizForm></CreateQuizForm> },
                { label: 'Play!', value: 'Tab 2', content: <MyQuizzes></MyQuizzes> },
                { label: 'Current game', value: 'Tab 3', content: <CurrentGame></CurrentGame>},
            ]}
        />
    );
};
