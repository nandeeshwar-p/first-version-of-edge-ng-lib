'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Xotb documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccordionGroupModule.html" data-type="entity-link">AccordionGroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccordionGroupModule-f5020fa057f970ef5a916914bfc295a8"' : 'data-target="#xs-components-links-module-AccordionGroupModule-f5020fa057f970ef5a916914bfc295a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccordionGroupModule-f5020fa057f970ef5a916914bfc295a8"' :
                                            'id="xs-components-links-module-AccordionGroupModule-f5020fa057f970ef5a916914bfc295a8"' }>
                                            <li class="link">
                                                <a href="components/AccordionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccordionGComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionGComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccordionGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionGroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AngularDynamicFormCreationModule.html" data-type="entity-link">AngularDynamicFormCreationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AngularDynamicFormCreationModule-27bd7257b26f4632a9ce6e826af028a8"' : 'data-target="#xs-components-links-module-AngularDynamicFormCreationModule-27bd7257b26f4632a9ce6e826af028a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AngularDynamicFormCreationModule-27bd7257b26f4632a9ce6e826af028a8"' :
                                            'id="xs-components-links-module-AngularDynamicFormCreationModule-27bd7257b26f4632a9ce6e826af028a8"' }>
                                            <li class="link">
                                                <a href="components/DynamicFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DynamicFormElemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicFormElemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AngularPaginationModule.html" data-type="entity-link">AngularPaginationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AngularPaginationModule-12641bca6c4b7539a6947603b1f5e695"' : 'data-target="#xs-components-links-module-AngularPaginationModule-12641bca6c4b7539a6947603b1f5e695"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AngularPaginationModule-12641bca6c4b7539a6947603b1f5e695"' :
                                            'id="xs-components-links-module-AngularPaginationModule-12641bca6c4b7539a6947603b1f5e695"' }>
                                            <li class="link">
                                                <a href="components/PagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-564e4e91afd58eeed667645f23443640"' : 'data-target="#xs-components-links-module-AppModule-564e4e91afd58eeed667645f23443640"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-564e4e91afd58eeed667645f23443640"' :
                                            'id="xs-components-links-module-AppModule-564e4e91afd58eeed667645f23443640"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContextMenuModule.html" data-type="entity-link">ContextMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContextMenuModule-a1c9a466cee39c1203f8e799d15cd00f"' : 'data-target="#xs-components-links-module-ContextMenuModule-a1c9a466cee39c1203f8e799d15cd00f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContextMenuModule-a1c9a466cee39c1203f8e799d15cd00f"' :
                                            'id="xs-components-links-module-ContextMenuModule-a1c9a466cee39c1203f8e799d15cd00f"' }>
                                            <li class="link">
                                                <a href="components/ContextMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContextMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContextMenuModuleInfo.html" data-type="entity-link">ContextMenuModuleInfo</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContextMenuModuleInfo-0f26fc42c280097a21c8f53ea9e402c3"' : 'data-target="#xs-components-links-module-ContextMenuModuleInfo-0f26fc42c280097a21c8f53ea9e402c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContextMenuModuleInfo-0f26fc42c280097a21c8f53ea9e402c3"' :
                                            'id="xs-components-links-module-ContextMenuModuleInfo-0f26fc42c280097a21c8f53ea9e402c3"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatePickerModule.html" data-type="entity-link">DatePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' : 'data-target="#xs-components-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' :
                                            'id="xs-components-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' }>
                                            <li class="link">
                                                <a href="components/DatePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatePickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' : 'data-target="#xs-injectables-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' :
                                        'id="xs-injectables-links-module-DatePickerModule-8aabb352892e80b9d4927ddae1ae1fd3"' }>
                                        <li class="link">
                                            <a href="injectables/DateConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DateConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DateRangePickerModule.html" data-type="entity-link">DateRangePickerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DialogComponentModule.html" data-type="entity-link">DialogComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DialogComponentModule-696e928b23408d9561f8856545be2e88"' : 'data-target="#xs-components-links-module-DialogComponentModule-696e928b23408d9561f8856545be2e88"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialogComponentModule-696e928b23408d9561f8856545be2e88"' :
                                            'id="xs-components-links-module-DialogComponentModule-696e928b23408d9561f8856545be2e88"' }>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicNgFormCreationFromJSONModule.html" data-type="entity-link">DynamicNgFormCreationFromJSONModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicNgFormCreationFromJSONModule-6cbfa9a12c3156d77c289d671748abff"' : 'data-target="#xs-components-links-module-DynamicNgFormCreationFromJSONModule-6cbfa9a12c3156d77c289d671748abff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicNgFormCreationFromJSONModule-6cbfa9a12c3156d77c289d671748abff"' :
                                            'id="xs-components-links-module-DynamicNgFormCreationFromJSONModule-6cbfa9a12c3156d77c289d671748abff"' }>
                                            <li class="link">
                                                <a href="components/DynamicNgFormCrationFromJsonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DynamicNgFormCrationFromJsonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormGeneratorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormGeneratorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImageSliderModule.html" data-type="entity-link">ImageSliderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ImageSliderModule-22a99ad24ab4cfc789e0d4d8d7b33c03"' : 'data-target="#xs-components-links-module-ImageSliderModule-22a99ad24ab4cfc789e0d4d8d7b33c03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImageSliderModule-22a99ad24ab4cfc789e0d4d8d7b33c03"' :
                                            'id="xs-components-links-module-ImageSliderModule-22a99ad24ab4cfc789e0d4d8d7b33c03"' }>
                                            <li class="link">
                                                <a href="components/ImageSliderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImagemainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImagemainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndeterminateTreeStructureModule.html" data-type="entity-link">IndeterminateTreeStructureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IndeterminateTreeStructureModule-056a0424f7ba68c7eb9486ed6d24e2fa"' : 'data-target="#xs-components-links-module-IndeterminateTreeStructureModule-056a0424f7ba68c7eb9486ed6d24e2fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndeterminateTreeStructureModule-056a0424f7ba68c7eb9486ed6d24e2fa"' :
                                            'id="xs-components-links-module-IndeterminateTreeStructureModule-056a0424f7ba68c7eb9486ed6d24e2fa"' }>
                                            <li class="link">
                                                <a href="components/IndetreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndetreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TreeNodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TreeNodeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocateOnMapModule.html" data-type="entity-link">LocateOnMapModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalWindowModule.html" data-type="entity-link">ModalWindowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalWindowModule-edc49b0542ca07116cd2a41493b46305"' : 'data-target="#xs-components-links-module-ModalWindowModule-edc49b0542ca07116cd2a41493b46305"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalWindowModule-edc49b0542ca07116cd2a41493b46305"' :
                                            'id="xs-components-links-module-ModalWindowModule-edc49b0542ca07116cd2a41493b46305"' }>
                                            <li class="link">
                                                <a href="components/FirstComponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FirstComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondComponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecondComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThirdComponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThirdComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MultiSelectValueExclusionModule.html" data-type="entity-link">MultiSelectValueExclusionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' : 'data-target="#xs-components-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' :
                                            'id="xs-components-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' }>
                                            <li class="link">
                                                <a href="components/MultiSelectValueExclusionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultiSelectValueExclusionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' : 'data-target="#xs-pipes-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' :
                                            'id="xs-pipes-links-module-MultiSelectValueExclusionModule-41c18e5c19330755283d30981bfe37bf"' }>
                                            <li class="link">
                                                <a href="pipes/ExcludeSelectedValuePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExcludeSelectedValuePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NumberInputModule.html" data-type="entity-link">NumberInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NumberInputModule-4628e9d3b912be643f2e23e9629e5ea0"' : 'data-target="#xs-components-links-module-NumberInputModule-4628e9d3b912be643f2e23e9629e5ea0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NumberInputModule-4628e9d3b912be643f2e23e9629e5ea0"' :
                                            'id="xs-components-links-module-NumberInputModule-4628e9d3b912be643f2e23e9629e5ea0"' }>
                                            <li class="link">
                                                <a href="components/NumberInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuickDatePickerModule.html" data-type="entity-link">QuickDatePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuickDatePickerModule-f38e9c6ac6a44b47417c7deecb7c4b00"' : 'data-target="#xs-components-links-module-QuickDatePickerModule-f38e9c6ac6a44b47417c7deecb7c4b00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuickDatePickerModule-f38e9c6ac6a44b47417c7deecb7c4b00"' :
                                            'id="xs-components-links-module-QuickDatePickerModule-f38e9c6ac6a44b47417c7deecb7c4b00"' }>
                                            <li class="link">
                                                <a href="components/QuickDatePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickDatePickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpeedometerModule.html" data-type="entity-link">SpeedometerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpeedometerModule-2412540267d7c32d30037a1cb107f373"' : 'data-target="#xs-components-links-module-SpeedometerModule-2412540267d7c32d30037a1cb107f373"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpeedometerModule-2412540267d7c32d30037a1cb107f373"' :
                                            'id="xs-components-links-module-SpeedometerModule-2412540267d7c32d30037a1cb107f373"' }>
                                            <li class="link">
                                                <a href="components/SpeedoMeterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpeedoMeterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpeedometerMainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpeedometerMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimePickerModule.html" data-type="entity-link">TimePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimePickerModule-9bd1e8ffe4a3849619aefed27b863d7e"' : 'data-target="#xs-components-links-module-TimePickerModule-9bd1e8ffe4a3849619aefed27b863d7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimePickerModule-9bd1e8ffe4a3849619aefed27b863d7e"' :
                                            'id="xs-components-links-module-TimePickerModule-9bd1e8ffe4a3849619aefed27b863d7e"' }>
                                            <li class="link">
                                                <a href="components/TimePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimePickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToggleButtonModule.html" data-type="entity-link">ToggleButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToggleButtonModule-5404d63a5d0e1d5b4d62333a421108af"' : 'data-target="#xs-components-links-module-ToggleButtonModule-5404d63a5d0e1d5b4d62333a421108af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToggleButtonModule-5404d63a5d0e1d5b4d62333a421108af"' :
                                            'id="xs-components-links-module-ToggleButtonModule-5404d63a5d0e1d5b4d62333a421108af"' }>
                                            <li class="link">
                                                <a href="components/ToggleButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToggleButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuickDatePicker.html" data-type="entity-link">QuickDatePicker</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link">ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DateConfigService.html" data-type="entity-link">DateConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link">Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Date.html" data-type="entity-link">Date</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateTimeRange.html" data-type="entity-link">DateTimeRange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormTypes.html" data-type="entity-link">FormTypes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDropDownOptions.html" data-type="entity-link">IDropDownOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImagesJsonFormate.html" data-type="entity-link">ImagesJsonFormate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Style.html" data-type="entity-link">Style</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Style-1.html" data-type="entity-link">Style</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Style-2.html" data-type="entity-link">Style</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Time.html" data-type="entity-link">Time</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode.html" data-type="entity-link">TreeNode</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});