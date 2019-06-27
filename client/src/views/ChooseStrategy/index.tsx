import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ChildDataProps, withApollo, graphql, compose, QueryOpts } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import gql from 'graphql-tag'
import {
  Button,
  Container,
  Grid,
  Form,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Transition,
} from 'semantic-ui-react'
import person6 from 'src/images/person6.png'

const queryString = require('query-string');
const stepQuery = gql`
  query step($id: ID, $lang: String, $renderMdToHtml: Boolean) {
    step(id: $id, lang: $lang, renderMdToHtml: $renderMdToHtml) {
      id
      publicField1
      publicField2
      publicField3
      publicField4
      publicField5
      publicField6
      publicField7
      publicField8
      publicField9
      publicField10
      publicField11
      publicField12
      publicField13
      publicField14
      publicField15
      publicField16
      publicField17
      publicField18
      publicField19
      privateField1
      privateField2
      privateField3
    },
  }
`

type StepRouteParams = {
  stepId: string
}

type StepQueryParams = {
  id: number
  lang: 'en' | 'es' | 'cn'
  renderMdToHtml: boolean
}

type Step = {
    publicField1: string
    publicField2: string
    publicField3: string
    publicField4: string
    publicField5: string
    publicField6: string
    publicField7: string
    publicField8: string
    publicField9: string
    publicField10: string
    publicField11: string
    publicField12: string
    publicField13: string
    publicField14: string
    publicField15: string
    publicField16: string
    publicField17: string
    publicField18: string
    publicField19: string
    privateField1: string
    privateField2: string
    privateField3: string
}

type StepQueryResponse = {
    step: Step
}

type OwnProps = RouteComponentProps<StepRouteParams>
type StepQueryProps = ChildDataProps<StepQueryParams, StepQueryResponse>
type Props = StepQueryProps & OwnProps

class ChooseStrategyView extends React.Component<Props, {}> {
  componentDidMount = () => {
  }

  render() {
    const { step, loading } = this.props.data

    return (
      <Container id="scenario-view">
        <h2 dangerouslySetInnerHTML={{ __html: step ? step.publicField1 : '' }} />
        <h3 dangerouslySetInnerHTML={{ __html: step ? step.publicField2 : '' }} />
        <p>{step && step.publicField3}</p>
        <h4>Pros:</h4>
        <p>{step && step.publicField4}</p>
        <h4>Cons</h4>
        <p>{step && step.publicField5}</p>
        <h4>Coins</h4>
        <p>{step && step.publicField6}</p>
        <Button as={Link} to={`/strategy-feedback/${step && step.privateField1}?lang=${queryString.parse(this.props.location.search).lang}`} className="btn primary">{step && step.publicField7}</Button>
        <br/>
        <h3 dangerouslySetInnerHTML={{ __html: step ? step.publicField8 : '' }} />
        <p>{step && step.publicField9}</p>
        <h4>Pros:</h4>
        <p>{step && step.publicField10}</p>
        <h4>Cons</h4>
        <p>{step && step.publicField11}</p>
        <h4>Coins</h4>
        <p>{step && step.publicField12}</p>
        <Button as={Link} to={`/strategy-feedback/${step && step.privateField2}?lang=${queryString.parse(this.props.location.search).lang}`} className="btn primary">{step && step.publicField13}</Button>
        <br/>
        <h3 dangerouslySetInnerHTML={{ __html: step ? step.publicField14 : '' }} />
        <p>{step && step.publicField15}</p>
        <h4>Pros:</h4>
        <p>{step && step.publicField16}</p>
        <h4>Cons</h4>
        <p>{step && step.publicField17}</p>
        <h4>Coins</h4>
        <p>{step && step.publicField18}</p>
        <Button as={Link} to={`/strategy-feedback/${step && step.privateField3}?lang=${queryString.parse(this.props.location.search).lang}`} className="btn primary">{step && step.publicField19}</Button>
      </Container>
    )
  }
}

export default graphql<Props, StepQueryResponse>(stepQuery, {
  options: (props: OwnProps): QueryOpts<StepQueryParams> => ({
    variables: {
      id: parseInt(props.match.params.stepId),
      lang: queryString.parse(props.location.search).lang ? queryString.parse(props.location.search).lang : "en",
      renderMdToHtml: true
    },
  }),
})(ChooseStrategyView)
