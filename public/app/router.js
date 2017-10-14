
app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = '/api/authenticate';
            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/auth');
              $stateProvider
                .state('layout', {
                    templateUrl: '/app/shared/template.html',
                })
                .state('adminLayout', {
                    templateUrl: '/app/shared/adminTemplate.html',
                })
                .state('landingLayout', {
                    templateUrl: '/app/shared/landingTemplate.html',
                })
                .state('landingLayout.auth', {
                    url: '/auth',
                    templateUrl: '/app/modules/auth/views/_landingPage.html',
                    controller: 'authController as auth'
                })
                .state('landingLayout.login',{
                  url : '/login',
                  templateUrl : '/app/modules/auth/views/_loginPage.html',
                  controller: 'authController as auth',
                  pageTitle : 'login'
                }) 
                .state('logout',{
                    url:'/logout',
                    controller:'logoutController as logout',
                })
               .state('adminLayout.addListing',{
                  url : '/addListing',
                  templateUrl:'/app/modules/listing/views/_addListing.html',
                  controller : 'addlistingController as addListing',
                  pageTitile : 'Add Listing'
                })
                .state('adminLayout.editListing',{
                  url : '/editListing/:id',
                  templateUrl:'/app/modules/listing/views/_editListing.html',
                  controller : 'editListingController as editListing',
                  pageTitile : 'Edit Listing'
                })

                 .state('landingLayout.searchListingList',{
                  url : '/searchListingList',
                  templateUrl:'/app/modules/listing/views/_searchListingList.html',
                  controller : 'searchListingController as searchListing',
                  pageTitile : 'Search Listing',
                  params:{
                      searchText:null,
                      searchLocation:null,
                      searchCategory:null
                      },
                })

                 .state('landingLayout.searchListingGrid',{
                  url : '/searchListingGrid',
                  templateUrl:'/app/modules/listing/views/_searchListingGrid.html',
                  controller : 'searchListingController as searchListing',
                  params:{
                      searchText:null,
                      searchLocation:null,
                      searchCategory:null
                      },
                })
                    .state('landingLayout.searchListingMap',{
                  url : '/searchListingMap',
                  templateUrl:'/app/modules/listing/views/_searchListingMap.html',
                  controller : 'searchListingController as searchListing',
                  params:{
                      searchText:null,
                      searchLocation:null,
                      searchCategory:null
                      },
                })
              .state('adminLayout.message',{
                  url : '/message',
                  templateUrl : '/app/modules/message/views/_message.html',
                  controller : 'messageController as message',
                  pageTitile : 'Message'
                })                
                .state('adminLayout.mylisting',{
                  url : '/mylisting',
                  templateUrl : '/app/modules/listing/views/_myListing.html',
                  controller: 'mylistingController as mylisting',
                  pageTitle : 'My Listing'
                })  
                   .state('adminLayout.reviews',{
                  url : '/reviews',
                  templateUrl : '/app/modules/reviews/views/_reviews.html',
                  controller: 'reviewsController as reviews',
                  pageTitle : 'My Listing'
                })                
                .state('adminLayout.bookmarks',{
                  url : '/bookmarks',
                  templateUrl : '/app/modules/bookmarks/views/_bookmarks.html',
                  controller: 'bookmarksController as bookmarks',
                  pageTitle : 'bookmarks'
                }) 
                .state('adminLayout.myprofile',{
                  url : '/myprofile',
                  templateUrl : '/app/modules/myprofile/views/_myprofile.html',
                  controller: 'myprofileController as myprofile',
                  pageTitle : 'myprofile'
                })
                .state('adminLayout.dashboard',{
                  url : '/dashboard',
                  templateUrl : '/app/modules/dashboard/views/_dashboard.html',
                  controller: 'dashboardController as dashboard',
                  pageTitle : 'dashboard'
                })               
                 .state('adminLayout.amenities',{
                  url:'/amenities',
                  templateUrl:'/app/modules/masters/amenities/views/_amenities.html',
                  controller:'amenitiesController as amenities',
                  pageTitle:'Amenities'
                })
                .state('adminLayout.category',{
                  url:'/category',
                  templateUrl:'/app/modules/masters/category/views/_category.html',
                  controller:'categoryController as category',
                  pageTitle:'Category'
                })
                .state('adminLayout.city',{
                  url:'/city',
                  templateUrl:'/app/modules/masters/city/views/_city.html',
                  controller:'cityController as city',
                  pageTitle:'City'
                })
               .state('adminLayout.state',{
                  url:'/state',
                  templateUrl:'/app/modules/masters/state/views/_state.html',
                  controller:'stateController as state',
                  pageTitle:'State'
                })
                .state('adminLayout.time',{
                  url:'/time',
                  templateUrl:'/app/modules/masters/time/views/_time.html',
                  controller:'timeController as time',
                  pageTitle:'Time'
                })
                .state('adminLayout.weekdays',{
                  url:'/weekdays',
                  templateUrl:'/app/modules/masters/weekdays/views/_weekdays.html',
                  controller:'weekdaysController as weekdays',
                  pageTitle:'Weekdays'
                })
                 .state('adminLayout.blogs',{
                  url : '/blogs',
                  templateUrl : '/app/modules/blogs/views/_manageBlogs.html',
                  controller: 'manageblogsController as manageblog',
                  pageTitle : 'Blogs',
                   params: {msg: null},
                })
                 .state('adminLayout.addBlog',{
                  url : '/addBlog',
                  templateUrl : '/app/modules/blogs/views/_addBlog.html',
                  controller: 'addblogController as addblog',
                  pageTitle : 'Add Blog'
                })
                .state('adminLayout.editBlog',{
                  url : '/editBlog/:id',
                  templateUrl : '/app/modules/blogs/views/_editBlog.html',
                  controller: 'editblogController as editblog',
                  pageTitle : 'Edit Blog'
                })
                .state('landingLayout.blogdetailPage',{
                  url : '/blogdetailPage/:id',
                  templateUrl : '/app/modules/blogs/views/_detailBlog.html',
                  controller: 'detailblogController as detailblog',
                  pageTitle : null
                })
                ;
                
                

        });

app.run(['$rootScope', '$location','$auth','$state', function ($rootScope, $location, $auth, $state, $templateCache) {

     $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $rootScope.pageTitle = toState.pageTitle;
        $rootScope.url = toState.url;
  });

    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
      if (!$auth.isAuthenticated()) {
        if($location.path() == "/auth"){
           $location.path("/auth");
        }       
        $rootScope.authenticated = false;
        $rootScope.userType = "admin";
      }
      else
      { 
        $rootScope.authenticated = true;
        
        if($location.path() == "/auth" || $location.path() == "/")
        {
            if ($auth.isAuthenticated()) {          
                $location.path("/auth");
              }
        }
      }
  });

  $rootScope.userType = localStorage.getItem('userType');
  $rootScope.userId = localStorage.getItem('userId');
  $rootScope.email = localStorage.getItem('email');
  $rootScope.username = localStorage.getItem('username');
  $rootScope.avatar = localStorage.getItem('avatar');
  $rootScope.authenticated = localStorage.getItem('authenticated');
  
  $rootScope.showTime = 5000;

}]);