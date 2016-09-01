describe('simpleSignupForm', function() {

  let scope,
      element,
      compiled,
      html;

  beforeEach(module('optInApp'));
  beforeEach(module('optIn-template.html'));
  beforeEach(inject(function($rootScope, $compile) {
    let html='';
    html += '<opt-in>';
    html += '<div class="brand-logo"></div>';
    html += '</opt-in>';

    scope = $rootScope.$new();
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();

  }));
  it('should render the element correctly', function() {
    expect(element.find('form').length).toBe(1);
    expect(element.find('input').length).toBe(3);
    expect(element.find('span').attr('ng-show').toBeFalsy);
    expect(element.find('button').attr('ng-disabled').toBeTruthy);
  });
});
