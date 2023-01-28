import {
  ScrollView as OriginalScrollView,
  ScrollViewProps,
  View
} from 'react-native'

import { OSRelative } from '@src/utils/OS'

import { styled } from 'nativewind'

interface IRelativeScrollViewProps extends ScrollViewProps {
  webWithView?: boolean
}

const RelativeScrollView = ({
  className,
  children,
  webWithView = false,
  ...props
}: IRelativeScrollViewProps) =>
  OSRelative(
    <OriginalScrollView className={className} {...props}>
      {children}
    </OriginalScrollView>,
    webWithView ? (
      <View className={className} {...props}>
        {children}
      </View>
    ) : (
      <>{children}</>
    )
  )

export default styled(RelativeScrollView)
