﻿/*
 * Copyright (c) 2016-2017 Håkan Edling
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 * 
 * https://github.com/piranhacms/piranha.core
 * 
 */

using System;

namespace Piranha.AttributeBuilder
{
    /// <summary>
    /// Attribute for marking a class as a page type.
    /// </summary>
    [AttributeUsage(AttributeTargets.Class)]
    public class PostTypeAttribute : ContentTypeAttribute { }
}
