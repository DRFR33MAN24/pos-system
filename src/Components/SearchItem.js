import React from 'react';
import { ScrollView } from 'react-native'
import {
    Input,
    Button,
    Icon,
    Layout,
    Modal,
    Card,
    Text,
} from '@ui-kitten/components';
function SearchItem(props) {
    const [value, setValue] = React.useState('');
    const searchResults = [{ name: 'Apple' }, { name: 'Orange' }];
    return (
        <Layout >

            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => {
                    setValue(nextValue)
                    // Call the Api 
                }}
            />
            {searchResults.length !== 0 ?
                <ScrollView>
                    {searchResults.map(item => (
                        <Text key={item.name}>{item.name}</Text>
                    ))}
                </ScrollView>
                :
                <Text>No Items Found!</Text>
            }
        </Layout>
    );
}

export default SearchItem;