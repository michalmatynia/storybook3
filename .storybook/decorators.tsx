import { DecoratorFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter } from 'react-router-dom'

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const withRouter: DecoratorFn = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
)
// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme, withDesign, withRouter]
