import {
  EuiText,
  EuiCard,
  EuiPageTemplate,
  EuiPageHeader,
  EuiPageSidebar,
  EuiListGroup,
  EuiListGroupItem,
  EuiIcon,
  EuiPanel,
  EuiCollapsibleNavGroup,
  EuiSpacer,
  EuiImage,
  EuiBetaBadge,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';


const Nav = () => {
  return (
    <div style={{height: "45px"}}>
      <EuiPanel color="plain" hasBorder padding="m">
        <EuiFlexGroup justifyContent="flexStart" alignItems="center" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiText color="text" size="s">
              <h4><EuiIcon type="logoEnterpriseSearch" size="l"/> Sunny Times</h4>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiBetaBadge
              label="Beta"
              size="s"
              tooltipContent="This module is not GA. Please help us by reporting any bugs."
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </div>
  )
}


export default Nav;