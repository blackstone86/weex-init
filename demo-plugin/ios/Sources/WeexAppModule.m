//
//  WeexAppModule.m
//  WeexPluginTemp
//
//  Created by  on 17/3/14.
//  Copyright © 2017年 . All rights reserved.
//

#import "WeexAppModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>

@implementation WeexAppModule

WX_PlUGIN_EXPORT_MODULE(demoPlugin, WeexAppModule)
WX_EXPORT_METHOD(@selector(show))

/**
 create actionsheet
 
 @param options items
 @param callback
 */
-(void)show
{
    UIAlertView *alertview = [[UIAlertView alloc] initWithTitle:@"title" message:@"module demoPlugin is created sucessfully" delegate:self cancelButtonTitle:@"cancel" otherButtonTitles:@"ok", nil];
    [alertview show];
    
}

@end
