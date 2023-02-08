import {
  ScrollView as OriginalScrollView,
  ScrollViewProps,
  View
} from 'react-native'

import { OSRelative } from '@src/utils/OS'

import { styled } from 'nativewind'

interface IRelativeScrollViewProps extends ScrollViewProps {
  webWithView?: boolean
  contentContainerStyle?: Object
}

const RelativeScrollView = ({
  className,
  children,
  webWithView = false,
  contentContainerStyle,
  ...props
}: IRelativeScrollViewProps) =>
  OSRelative(
    <OriginalScrollView
      tw={className}
      contentContainerStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...contentContainerStyle
      }}
      {...props}
    >
      {children}
    </OriginalScrollView>,
    webWithView ? (
      <View tw={className} {...props}>
        {children}
      </View>
    ) : (
      <>{children}</>
    )
  )

export default styled(RelativeScrollView)
