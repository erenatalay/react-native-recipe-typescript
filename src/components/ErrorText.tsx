import React from "react"
import { HelperText } from "react-native-paper"
import { Text } from "react-native"


const ErrorText = (props: any) => {

    const visible = !!(props.error && props.touched)
    return (
        <>
            {visible &&
            <HelperText type="error"
                visible={visible}>
                <Text>{props.error}</Text>
            </HelperText>
            }
        </>
    )
}
export default ErrorText